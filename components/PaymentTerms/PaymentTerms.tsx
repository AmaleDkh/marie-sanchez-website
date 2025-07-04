// React icons
import { Wallet, Clock, AlertCircle } from 'lucide-react';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Style
import './PaymentTerms.scss';

interface PaymentTermProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

function PaymentTerm({ title, children, icon }: PaymentTermProps) {
  return (
    <div className="payment-term">
      <div className="payment-term__icon">{icon}</div>
      <h3 className="payment-term__title">{title}</h3>
      <div className="payment-term__content">{children}</div>
    </div>
  );
}

function PaymentTerms() {
  return (
    <div className="payment-terms-container">
      <SectionTitle
        title="Modalités de paiement"
        textAlignVersion="center"
        colorVersion="dark-green"
      />

      <div className="payment-terms">
        <PaymentTerm title="Options de règlement" icon={<Wallet size={36} />}>
          <p>Espèces, chèque ou virement bancaire</p>
        </PaymentTerm>

        <PaymentTerm title="Facilités de paiement" icon={<Clock size={36} />}>
          <p>Paiement en 2 ou 3 fois possible</p>
        </PaymentTerm>

        <PaymentTerm
          title="Politique d'annulation"
          icon={<AlertCircle size={36} />}
        >
          <p>
            Toute séance non annulée 24h en avance sera considérée comme due
          </p>
        </PaymentTerm>
      </div>
    </div>
  );
}

export default PaymentTerms;
