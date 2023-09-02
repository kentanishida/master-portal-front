import { LargeCard } from '../../_grobals/LargeCard';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  return <LargeCard {...props} />;
};
