import { Greeting } from '@components/Greeting';
import { WorkTypes } from '@components/WorkTypes';
import { Header } from '@components/Header';
import { Examples } from '@components/Examples';

export function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <Greeting />
                <WorkTypes />
                <Examples />
            </main>
        </>
    );
}
