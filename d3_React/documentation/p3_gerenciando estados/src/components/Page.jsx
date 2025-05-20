import Heading from './Heading.jsx'
import Section from './Section.jsx'

export default function Page(){
    return(
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Title</Heading>
                <Heading>Title</Heading>
                <Heading>Title</Heading>
                <Section>
                    <Heading>Title</Heading>
                    <Heading>Title</Heading>
                    <Heading>Title</Heading>
                </Section>
            </Section>
        </Section>
    );
}