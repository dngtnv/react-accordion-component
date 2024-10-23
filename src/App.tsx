import "./App.scss";
import Accordion from "./components/Accordion";

function App() {
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="text-center">Accordion React Compound Components</h1>
          <Accordion>
            <Accordion.Item id="1">
              <Accordion.Title>Our Services</Accordion.Title>
              <Accordion.Content>
                <article>
                  <p>Comprehensive Web Developer Solutions</p>
                  <p>
                    We offer a range of web development services tailored to
                    meet your business needs.
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="2">
              <Accordion.Title>Our Process</Accordion.Title>
              <Accordion.Content>
                <article>
                  <p>Streamlined Development Process</p>
                  <p>
                    Our development process ensures timely delivery and
                    high-quality results.
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="3">
              <Accordion.Title>Why Choose Us?</Accordion.Title>
              <Accordion.Content>
                <article>
                  <p>Your Trusted Web Development Partner</p>
                  <p>
                    Choosing our web development services means you benefit from
                    expert team, tailored solutions and more.
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </main>
  );
}

export default App;
