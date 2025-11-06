import React from 'react';

type Props = {
  title: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export default function ProductCard({ title, selected, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'block',
        width: '100%',
        padding: '14px 16px',
        marginBottom: 12,
        border: selected ? '2px solid #ff1391' : '1px solid #ccc',
        borderRadius: 8,
        background: selected ? '#fff0f7' : 'white',
        textAlign: 'left',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
    >
      <div style={{ fontWeight: 700 }}>{title}</div>
    </button>
  );
}
