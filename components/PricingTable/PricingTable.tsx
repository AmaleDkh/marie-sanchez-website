// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Style
import './PricingTable.scss';

export interface PricingItem {
  title: string;
  description: string;
  duration: string;
  price: string;
}

interface PricingTableProps {
  items: PricingItem[];
}

function PricingTable({ items }: PricingTableProps) {
  return (
    <div className="pricing-table-container">
      <SectionTitle
        title="Tarifs & durées des consultations"
        textAlignVersion="center"
        colorVersion="dark-green"
      />
      <div className="pricing-table">
        <div className="pricing-table__row pricing-table__row--header">
          <div className="pricing-table__cell">Type de consultation</div>
          <div className="pricing-table__cell">Durée</div>
          <div className="pricing-table__cell">Tarif</div>
        </div>

        {items.map((item, index) => (
          <div key={index} className="pricing-table__row">
            <div className="pricing-table__cell">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="pricing-table__cell" data-label="Durée">
              {item.duration}
            </div>
            <div className="pricing-table__cell" data-label="Tarif">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingTable;
