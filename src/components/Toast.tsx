import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          id="copy-toast-notification"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-xl shadow-neutral-950/20"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-neutral-950">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
