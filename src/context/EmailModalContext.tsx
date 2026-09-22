import { createContext, useContext, useState, type ReactNode } from 'react';
import { EmailActionModal, type EmailModalOptions } from '@/components/ui/EmailActionModal';

interface EmailModalContextType {
  openEmailModal: (options?: EmailModalOptions) => void;
  closeEmailModal: () => void;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined);

export function EmailModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<EmailModalOptions | undefined>(undefined);

  const openEmailModal = (opts?: EmailModalOptions) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const closeEmailModal = () => {
    setIsOpen(false);
  };

  return (
    <EmailModalContext.Provider value={{ openEmailModal, closeEmailModal }}>
      {children}
      <EmailActionModal isOpen={isOpen} onClose={closeEmailModal} options={options} />
    </EmailModalContext.Provider>
  );
}

export function useEmailModal() {
  const ctx = useContext(EmailModalContext);
  if (!ctx) {
    throw new Error('useEmailModal must be used within an EmailModalProvider');
  }
  return ctx;
}
