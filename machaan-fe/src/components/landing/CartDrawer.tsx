"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { cartItems, isOpen, setIsOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close cart drawer on ESC press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent body scrolling when cart is open
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with transition */}
      <div
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm animate-fade-in transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-brand-dark/5 px-6 py-5">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            Cart List
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10 text-xs font-bold text-brand-orange">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </h2>
          <button
            type="button"
            className="group rounded-full p-1.5 text-brand-dark/45 hover:bg-brand-gray hover:text-brand-dark transition-all duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <svg
              className="h-6 w-6 transition-transform group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body / Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gray text-4xl">
                🛒
              </div>
              <p className="text-lg font-bold text-brand-dark">Your cart is empty</p>
              <p className="mt-1 text-sm text-brand-dark/50">
                Add some tasty dishes from our menu to satisfy your cravings.
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-6 !py-2.5 !px-6"
              >
                Start Ordering
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 rounded-2xl border border-brand-dark/5 bg-brand-gray/30 p-3 transition-all hover:bg-brand-gray/60"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white border border-brand-dark/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-dark truncate">{item.name}</h3>
                    <p className="text-xs text-brand-dark/50 line-clamp-1 mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-brand-orange text-sm">
                        {item.priceString}
                      </span>
                      {/* Quantity Selectors */}
                      <div className="flex items-center gap-2 rounded-lg bg-white border border-brand-dark/10 p-1">
                        <button
                          type="button"
                          className="flex h-6 w-6 items-center justify-center rounded bg-brand-gray text-xs font-semibold text-brand-dark hover:bg-brand-dark/10 transition-colors"
                          onClick={() => updateQuantity(item.name, -1)}
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-brand-dark">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="flex h-6 w-6 items-center justify-center rounded bg-brand-gray text-xs font-semibold text-brand-dark hover:bg-brand-dark/10 transition-colors"
                          onClick={() => updateQuantity(item.name, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    className="p-1 text-brand-dark/30 hover:text-red-500 transition-colors self-start"
                    onClick={() => removeFromCart(item.name)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-brand-dark/5 bg-brand-gray/20 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between font-bold">
              <span className="text-brand-dark/65">Subtotal:</span>
              <span className="text-xl text-brand-dark">${cartTotal.toFixed(2)} USD</span>
            </div>
            <p className="text-[11px] text-brand-dark/40 text-center leading-normal">
              Shipping & taxes calculated at checkout. Deliveries typically arrive in 30-45 minutes.
            </p>
            <button
              type="button"
              className="btn-primary w-full shadow-lg flex items-center justify-center gap-3 text-sm py-4.5"
              onClick={() => alert("Checkout flow simulation! Thank you for ordering from Unidine.")}
            >
              Continue to Checkout
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
