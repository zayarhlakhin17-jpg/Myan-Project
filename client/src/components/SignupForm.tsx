/**
 * Design: Aurora Scholar — Signup Form
 * Full Name, Email, Password, Confirm Password with validation
 * Show/hide password, terms checkbox, disabled submit until valid
 */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface SignupFormProps {
  onSwitchToLogin: () => void;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupForm({ onSwitchToLogin, onClose }: SignupFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(value)) return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(value)) return "Password must contain a lowercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain a number";
    return "";
  };

  const errors: FormErrors = useMemo(() => {
    const errs: FormErrors = {};
    if (!fullName.trim()) errs.name = "Full name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!validateEmail(email)) errs.email = "Please enter a valid email";
    if (!password) errs.password = "Password is required";
    else {
      const pwError = validatePassword(password);
      if (pwError) errs.password = pwError;
    }
    if (!confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";
    return errs;
  }, [fullName, email, password, confirmPassword]);

  const isFormValid = useMemo(() => {
    return (
      fullName.trim() &&
      validateEmail(email) &&
      !validatePassword(password) &&
      password === confirmPassword &&
      agreeTerms
    );
  }, [fullName, email, password, confirmPassword, agreeTerms]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold font-display text-white">
          Create Account
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Start your journey with MyanPath AI
        </p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-sm text-gray-300 font-medium">Full Name</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              className={`w-full h-10 pl-10 pr-4 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all ${
                errors.name
                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                  : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-400 mt-0.5">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-sm text-gray-300 font-medium">Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full h-10 pl-10 pr-4 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                  : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-400 mt-0.5">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-sm text-gray-300 font-medium">Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 characters"
              className={`w-full h-10 pl-10 pr-10 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all ${
                errors.password
                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                  : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-400 mt-0.5">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label className="text-sm text-gray-300 font-medium">
            Confirm Password
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className={`w-full h-10 pl-10 pr-10 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all ${
                errors.confirmPassword
                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                  : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-400 mt-0.5">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 accent-blue-500"
          />
          <span className="text-sm text-gray-400">
            I agree to the{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms & Conditions
            </a>
          </span>
        </label>

        {/* Create Account Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-11 rounded-xl font-medium text-sm transition-all duration-200 ${
            isFormValid
              ? "btn-primary text-white"
              : "bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </form>

      {/* Switch to Login */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Login
        </button>
      </p>
    </motion.div>
  );
}
