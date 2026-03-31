import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full min-h-[22rem] md:min-h-[26rem] my-12 p-8 md:p-14 rounded-[48px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  blurAmount = 2,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const initialTopsRef = useRef<number[]>([]);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !initialTopsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    
    const endElement = document.querySelector('.scroll-stack-end') as HTMLElement | null;
    const endElementTop = endElement ? (endElement.getBoundingClientRect().top + window.scrollY) : 0;
    const pinEnd = endElementTop - containerHeight;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = initialTopsRef.current[i];
      const targetPinY = stackPositionPx + (i * itemStackDistance);
      const pinStart = cardTop - targetPinY;

      let translateY = 0;
      let scale = 1;
      let opacity = 1;
      let blur = 0;

      if (scrollTop >= pinStart) {
        if (scrollTop <= pinEnd) {
          translateY = scrollTop - pinStart;
        } else {
          translateY = pinEnd - pinStart;
        }

        let cardsAbove = 0;
        for (let j = i + 1; j < cardsRef.current.length; j++) {
            const nextCardTop = initialTopsRef.current[j];
            const nextTargetPinY = stackPositionPx + (j * itemStackDistance);
            const nextPinStart = nextCardTop - nextTargetPinY;
            
            if (scrollTop > nextPinStart) {
                const moveDist = 200; 
                const progress = Math.min(1, (scrollTop - nextPinStart) / moveDist);
                cardsAbove += progress;
            }
        }
        
        scale = 1 - (cardsAbove * itemScale);
        opacity = 1 - (cardsAbove * 0.1);
        blur = cardsAbove * blurAmount;
      }

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
    });
  }, [itemScale, itemStackDistance, stackPosition, blurAmount, parsePercentage]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    // Capture initial positions before any transforms are applied
    initialTopsRef.current = cards.map(card => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
    });

    cards.forEach((card, i) => {
      card.style.willChange = 'transform, opacity, filter';
      card.style.transformOrigin = 'top center';
      card.style.position = 'relative'; 
      card.style.zIndex = (i + 1).toString();
    });

    const handleScroll = () => {
      requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
        // Recalculate tops on resize
        initialTopsRef.current = cards.map(card => {
            const rect = card.getBoundingClientRect();
            // Need to remove current transform to get original top
            const transform = card.style.transform;
            card.style.transform = 'none';
            const originalTop = card.getBoundingClientRect().top + window.scrollY;
            card.style.transform = transform;
            return originalTop;
        });
        updateCardTransforms();
    });

    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateCardTransforms]);

  return (
    <div className={`relative w-full ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-10 px-4 md:px-20 pb-[20rem] md:pb-[40rem] flex flex-col gap-32">
        {children}
        <div className="scroll-stack-end w-full h-px mt-20" />
      </div>
    </div>
  );
};

export default ScrollStack;
