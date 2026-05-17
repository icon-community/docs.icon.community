"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sodaxLogo from "../public/sodax-logo.png";

const MODAL_DISMISSED_KEY = "sodax_rebrand_modal_dismissed_v1";
const BANNER_DISMISSED_KEY = "sodax_rebrand_banner_dismissed_v1";

const CHERRY_SODA = "#A55C55";
const YELLOW_DARK = "#ECC100";
const ESPRESSO = "#483534";
const CREAM = "#EADDD4";
const VIBRANT_WHITE = "#F9F7F5";
const CLAY_DARK = "#6B5C5B";

export function SodaxAnnouncement() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(MODAL_DISMISSED_KEY)) {
        setModalOpen(true);
      }
      if (!localStorage.getItem(BANNER_DISMISSED_KEY)) {
        setBannerVisible(true);
      }
    } catch {
      setModalOpen(true);
      setBannerVisible(true);
    }
  }, []);

  const dismissModal = () => {
    setModalOpen(false);
    try {
      localStorage.setItem(MODAL_DISMISSED_KEY, "1");
    } catch {}
  };

  const dismissBanner = () => {
    setBannerVisible(false);
    try {
      localStorage.setItem(BANNER_DISMISSED_KEY, "1");
    } catch {}
  };

  return (
    <>
      {bannerVisible && (
        <div
          className="sticky top-0 z-40 w-full text-sm"
          style={{ backgroundColor: ESPRESSO, color: VIBRANT_WHITE }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center gap-3">
              <Image
                src={sodaxLogo}
                alt="SODAX"
                width={20}
                height={20}
                className="shrink-0"
                unoptimized
              />
              <p>
                You are viewing the legacy ICON documentation. ICON is now SODAX, infrastructure for modern money live across 18+ networks.{" "}
                <a
                  href="https://sodax.com"
                  className="underline font-semibold hover:no-underline"
                  style={{ color: YELLOW_DARK }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sodax.com
                </a>
                <span className="opacity-60"> · </span>
                <a
                  href="https://docs.sodax.com"
                  className="underline font-semibold hover:no-underline"
                  style={{ color: YELLOW_DARK }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs.sodax.com
                </a>
              </p>
            </div>
            <button
              type="button"
              onClick={dismissBanner}
              aria-label="Dismiss banner"
              className="shrink-0 text-lg leading-none px-2 opacity-70 hover:opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(72, 53, 52, 0.75)", backdropFilter: "blur(4px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sodax-announcement-title"
          onClick={dismissModal}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: VIBRANT_WHITE }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={dismissModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-2xl leading-none w-9 h-9 flex items-center justify-center rounded-full transition z-10"
              style={{ color: ESPRESSO, backgroundColor: CREAM }}
            >
              ×
            </button>
            <div className="p-8 pt-10" style={{ color: ESPRESSO }}>
              <Image
                src={sodaxLogo}
                alt="SODAX"
                width={56}
                height={56}
                className="mb-6"
                unoptimized
              />
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: CHERRY_SODA }}
              >
                ICON is now SODAX
              </p>
              <h2
                id="sodax-announcement-title"
                className="text-2xl font-bold mb-4"
                style={{ color: ESPRESSO, lineHeight: 1.15 }}
              >
                Infrastructure for modern money
              </h2>
              <p className="mb-3" style={{ color: ESPRESSO, lineHeight: 1.5 }}>
                SODAX is a cross-network execution and liquidity system live across 18+ networks. Wallets, DEXs, lending protocols, and networks integrate the SODAX SDK to ship cross-network swaps, lending, borrowing, staking, and settlement without building execution infrastructure.
              </p>
              <p className="text-sm mb-6" style={{ color: CLAY_DARK, lineHeight: 1.5 }}>
                You are viewing the legacy ICON documentation. These docs are deprecated and no longer maintained. Visit SODAX for the latest product, integrations, and builder resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://sodax.com"
                  className="flex-1 text-center px-5 py-3 rounded-lg font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: CHERRY_SODA, color: VIBRANT_WHITE }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit sodax.com
                </a>
                <a
                  href="https://docs.sodax.com"
                  className="flex-1 text-center px-5 py-3 rounded-lg font-semibold transition hover:opacity-90"
                  style={{
                    backgroundColor: "transparent",
                    color: ESPRESSO,
                    border: `1.5px solid ${ESPRESSO}`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Builder docs
                </a>
              </div>
              <button
                type="button"
                onClick={dismissModal}
                className="mt-4 w-full text-sm transition hover:opacity-100"
                style={{ color: CLAY_DARK, opacity: 0.8 }}
              >
                Continue to legacy ICON docs
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
