import Header from './Header';
import InputForm from './input_form/InputForm';
import OutputForm from './output_form/OutputForm';

const Calculator = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center
     bg-graphite px-2 py-4 text-white"
    >
      <header>
        <Header />
      </header>
      <main className="flex w-full flex-col items-center justify-center gap-8 p-2 lg:p-6 xl:flex-row">
        <InputForm />
        <OutputForm />
      </main>
    </div>
  );
};

export default Calculator;
