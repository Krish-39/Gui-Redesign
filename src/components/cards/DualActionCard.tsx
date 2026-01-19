import React, { ReactNode } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export interface ActionCard {
  id: string;
  icon: ReactNode;
  iconBgColor: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaAction: () => void;
  recommended?: boolean;
  learnMoreLink?: string;
  onLearnMore?: () => void;
}

export interface DualActionCardsProps {
  cards: [ActionCard, ActionCard];
  onCardSelect: (cardId: string) => void;
}

export function DualActionCards({ cards, onCardSelect }: DualActionCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <DualActionCard
          key={card.id}
          card={card}
          onSelect={() => onCardSelect(card.id)}
        />
      ))}
    </div>
  );
}

interface DualActionCardProps {
  card: ActionCard;
  onSelect: () => void;
}

function DualActionCard({ card, onSelect }: DualActionCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`
        relative bg-white rounded-lg p-6 transition-all duration-200 cursor-pointer border
        hover:shadow-xl
        ${
          card.recommended
            ? 'shadow-lg'
            : 'hover:border-berlin-blue'
        }
      `}
      style={{
        borderColor: card.recommended ? '#E40422' : '#CCCCCC',
        borderWidth: card.recommended ? '2px' : '1px',
        ...(card.recommended && { background: 'linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%)' })
      }}
      onClick={onSelect}
    >
      {/* Recommended Badge - Using Berlin Red */}
      {card.recommended && (
        <div 
          className="absolute -top-3 left-6 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md"
          style={{ backgroundColor: '#E60032' }}
        >
          <Star className="w-3 h-3 fill-current" />
          {t.decisionHub.recommendedLabel}
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
        style={{ backgroundColor: card.iconBgColor }}
      >
        <div className="w-8 h-8 text-white">{card.icon}</div>
      </div>

      {/* Content */}
      <h2 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>
        {card.headline}
      </h2>

      <p className="mb-6 line-clamp-2 min-h-[3rem]" style={{ color: '#333333' }}>
        {card.description}
      </p>

      {/* CTA Button - Using Berlin Red for primary */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          card.ctaAction();
        }}
        className={`
          w-full py-3 px-4 rounded font-semibold transition-all duration-200
          flex items-center justify-center gap-2 group
        `}
        style={{
          backgroundColor: card.recommended ? '#E60032' : '#002A4E',
          color: '#FFFFFF',
          boxShadow: card.recommended ? '0 2px 4px rgba(230, 0, 50, 0.2)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = card.recommended ? '#CC0028' : '#001A30';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = card.recommended ? '#E60032' : '#002A4E';
        }}
      >
        {card.ctaLabel}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Optional Learn More Link - Using Berlin Blue */}
      {card.onLearnMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            card.onLearnMore?.();
          }}
          className="block w-full text-center mt-3 text-sm hover:underline"
          style={{ color: '#002A4E' }}
        >
          {t.decisionHub.learnMore}
        </button>
      )}
    </div>
  );
}