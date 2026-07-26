/**
 * Design: Aurora Scholar — Auth Modal
 * Centered modal with backdrop blur, Framer Motion animations,
 * Login/Signup form switching, close on X/outside/Escape
 */
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  isLogin: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSwitchToSignup: () => void;
}

export default function AuthModal({
  isOpen,
  isLogin,
  onClose,
  onSwitchToLogin,
  onSwitchToSignup,
}: AuthModalProps) {
  // Close on Escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-md rounded-2xl glass-card shadow-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 z-10"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Glow accent at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

            {/* Content */}
            <div className="p-8 pt-10">
              {isLogin ? (
                <LoginForm
                  onSwitchToSignup={onSwitchToSignup}
                  onClose={onClose}
                />
              ) : (
                <SignupForm
                  onSwitchToLogin={onSwitchToLogin}
                  onClose={onClose}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
