import { Greeting } from '@components/Greeting';
import { WorkTypes } from '@components/WorkTypes';
import { Header } from '@components/Header';
import { Examples } from '@components/Examples';
import { Price } from '@components/Price';
import { Consultation } from '@components/Consultation';
import { Contacts } from '@components/Contacts';
import { Footer } from '@components/Footer';

export function LandingPage() {
    return (
    <>
            <Header />
        <main>
                <Greeting />
                <WorkTypes />
              <Examples />
                <Price />
                <Consultation />
                <Contacts />
            </main>
            <Footer />
      </>
    );
}
