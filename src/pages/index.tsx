import {ServiceCard} from '../components/features/mainPage/ServiceCard';

const services = [
  { id: '1', title: 'Service 1', description: 'This is service 1' },
  { id: '2', title: 'Service 2', description: 'This is service 2' },
  // ... more services
];

const MainPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4 text-center text-gray-100">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
