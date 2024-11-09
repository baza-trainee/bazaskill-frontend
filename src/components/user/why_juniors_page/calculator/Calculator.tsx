import Header from './Header';
import InputForm from './input_form/InputForm';
import OutputForm from './output_form/OutputForm';

const Calculator = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-graphite text-white p-4">
      <header>
        <Header />
      </header>
      <main className="w-full p-6 flex justify-center items-center gap-8">
        <InputForm />
        <OutputForm />
      </main>
    </div>
  );
};

export default Calculator;

