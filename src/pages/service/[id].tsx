import { useRouter } from 'next/router';

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* イントロダクション */}
      <section className="text-center py-16 bg-blue-800 text-white">
        <h1 className="text-4xl mb-4">Welcome to Service {id}</h1>
        <p className="text-lg max-w-2xl mx-auto">
          This is a great place to introduce the service to the user. Describe
          what problems this service solves and how it can help the user.
        </p>
      </section>

      {/* 特徴 */}
      <section className="text-center py-16">
        <h2 className="text-3xl mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Explain what this feature does and why it is important.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Explain what this feature does and why it is important.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Explain what this feature does and why it is important.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
