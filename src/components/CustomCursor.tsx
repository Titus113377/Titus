import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isLink = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
      const isCard = Boolean(target.closest('[data-cursor="card"]'));

      setIsHoveringLink(isLink);
      setIsHoveringCard(isCard);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central crisp dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '7px',
          height: '7px',
          backgroundColor: '#4F7CFF',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(79, 124, 255, 0.8)',
        }}
      />

      {/* Subtle trailing glowing aura */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-all duration-200 ease-out border"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHoveringCard ? '54px' : isHoveringLink ? '42px' : '26px',
          height: isHoveringCard ? '54px' : isHoveringLink ? '42px' : '26px',
          borderColor: isHoveringCard ? 'rgba(22, 163, 148, 0.6)' : 'rgba(79, 124, 255, 0.45)',
          backgroundColor: isHoveringCard
            ? 'rgba(22, 163, 148, 0.08)'
            : isHoveringLink
            ? 'rgba(79, 124, 255, 0.12)'
            : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
