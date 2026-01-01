import ContactForm from "./components/ContactForm/ContactForm";
import ConatctHeader from "./components/ContactHeader/ConatctHeader";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <main>
        <ConatctHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
