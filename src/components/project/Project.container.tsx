import ProjectPresenter from './Project.presenter';
import { ProjectData } from './Project.types';

const projects: ProjectData[] = [
    {
        title: 'Jeju Trevel (학원 1차 프로젝트)',
        period: '2024.04 ~ 2024.05',
        description: '제주도 여행 웹사이트',
        techStack: ['JAVA', 'JSP', 'HTML5', 'CSS3', 'Javascript', 'SQL', 'JQuery (Ajax)' ],
        image: '/images/project/JejuTravel.png',
        link: 'https://github.com/GojaeDoo/MVC_Project_Jeju'
    },
    {
        title: 'Pretzel (학원 2차 프로젝트)',
        period: '2024.06 ~ 2024.08',
        description: '영화 OTT 웹사이트',
        techStack: ['HTML5', 'CSS3', 'Javascript', 'React', 'Next.js', 'Axios', 'MUI' , 'Styled-Components' ],
        image: '/images/project/Pretzel.png',
        link: 'https://github.com/GojaeDoo/Pretzel'
    },
    {
        title: '포트폴리오 웹 사이트',
        period: '2025.06 ~ 2025.07',
        description: '개인 포트폴리오 웹사이트',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Styled-Components'],
        image: '/images/project/myWeb.png',
        link: 'https://github.com/GojaeDoo/Portfolio'
    },
    {
        title: 'CODIDRIP (개인프로젝트)',
        period: '2023.03 ~ 2024.07',
        description: '코디 공유 웹사이트',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Styled-Components' , 'Axios' , 'Node.js' , 'Express', 'PostgreSQL' , 'Vercel' , 'Render' , 'Supabase'],
        image: '/images/project/CodiDrip.png',
        link: 'https://github.com/GojaeDoo/Portfolio'
    }
];

export const ProjectContainer = () => {
    return <ProjectPresenter projects={projects} />;
};

export default ProjectContainer; 