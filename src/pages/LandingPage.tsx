import { Greeting } from '@components/Greeting';
import { WorkTypes } from '@components/WorkTypes';
import { Header } from '@components/Header';
import { Examples } from '@components/Examples';
import { Price } from '@components/Price';

export function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <Greeting />
                <WorkTypes />
                <Examples />
                <Price />
            </main>
        </>
    );
}
