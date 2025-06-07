
import ConferenceForm from '@/components/ConferenceForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Conference Connect</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about yourself and what you're looking for at your upcoming conference
          </p>
        </div>
        <ConferenceForm />
      </div>
    </div>
  );
};

export default Index;
