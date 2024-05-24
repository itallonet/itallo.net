import { Helmet } from "react-helmet";
import Article from "../article";
import Footer from "../footer";
import Header from "../header";
import Image from "../image";
import MetaData from "../metadata";
import Paragraph from "../paragraph";
import SubTitle from "../subtitle";
import Title from "../title";
import SecondTitle from "../title-two";

const ANewMilestone = () => {
    return (
        <main id="detail-post" style={{ display: "flex", flexDirection: 'column' }}>
            <Helmet>
                <title>A New Milestone: Unveiling Boundless Possibilities | Itallo Rian</title>
            </Helmet>
            <Header />
            <MetaData date={"Mar 1, 2022"} />
            <Article>
                <Title>A New Milestone: Unveiling Boundless Possibilities</Title>
                <SubTitle>Where It All Began: A Journey of Origins and Discovery</SubTitle>
                <Paragraph>Hello, I’m Ítallo Rian: The Evolution of a Developer’s Journey Unveiled. At the age of 16, amidst my second year of high school, I embarked on a quest for a chance to serve as a young apprentice. Six months of relentless studying and job applications led to a pivotal moment when an interview was finally scheduled.</Paragraph>
                <SecondTitle>The Interview: A Turning Point in My Journey at 16</SecondTitle>
                <Paragraph>At first, I felt nervous, as I had never experienced such a situation. During the months of job hunting, I took the opportunity to delve into the world of work — especially focusing on administration and web development.</Paragraph>
                <Paragraph>Then the day arrived. Another candidate and I found ourselves in the same interview session. We discussed various topics — expectations, experiences — until one of the interviewers broached the subject of web development/design. At that moment, I couldn’t help but wear an internal smile.</Paragraph>
                <Paragraph>Having dedicated six months to studying the subject, I felt more confident and steered the interview into my comfort zone. In the end, we shook hands, and I left with the hopeful anticipation of receiving a call in the coming weeks.</Paragraph>
                <Paragraph>However, not even a week passed; I was pleasantly surprised to find out the very next day that I had been selected. By the following week, I would officially be part of the team.</Paragraph>
                <SecondTitle>The Evolution: From Nervous Beginnings to Swift Success</SecondTitle>
                <Paragraph>My First Month: Bridging Professional Learning and Office Debut in the Marketing Realm. The initial 7 months saw relentless effort and daily strides, establishing connections until an opportunity to join the IT team emerged.</Paragraph>
                <Paragraph>Started from the Bottom: 9 Months of Learning, Growing, and Late Nights. A pivotal conversation awaited me — a turning point that could either mark the end or signify my official entry into the IT domain.</Paragraph>
                <Paragraph>The Best Unfolded: From Trainee to Junior in Just Over a Year. I started from scratch, leveraging the privilege of teenage study time and the determination to grow.</Paragraph>
                <Paragraph>Never Stop Learning, Always Aspire to Win. Your Determination Moves the World.</Paragraph>
                <Image legend="Itallo Rian" source={"https://media.licdn.com/dms/image/C4D22AQEAosKJdTtTdA/feedshare-shrink_800/0/1656712456246?e=1719446400&v=beta&t=NI_UqzjsclYt-9N-59xG2eKBohj0ETUaGg3p9ikmqxY"} />
            </Article>
            <Footer />
        </main>
    )
}

export default ANewMilestone;