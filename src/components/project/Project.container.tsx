import React, { useEffect, useState } from 'react';
import ProjectPresenter from './Project.presenter';
import { ProjectData, ProjectContainerProps } from './Project.types';

const projects: ProjectData[] = [
    {
        title: 'Jeju Trevel (학원 1차 팀 프로젝트)',
        period: '2024.04 ~ 2024.05',
        description: '제주도 여행 웹사이트',
        detailedDescription: '제주 여행 일정을 편리한 인터페이스와 최신 데이터를 기반으로 쉽고 간편하게 계획할수 있는 플래너 서비스 및 정보제공 사이트를 만들었습니다.',
        techStack: ['JAVA', 'JSP', 'HTML5', 'CSS3', 'Javascript', 'SQL', 'JQuery (Ajax)' ],
        image: '/images/project/JejuTravel.png',
        githubLink: 'https://github.com/GojaeDoo/MVC_Project_Jeju',
        features: [
            '정렬 기능 구현',
            '카카오 지도 API 활용 / 장소 위치 및 정보 제공',
            '카테고리 페이지 디자인 및 서버 구축',
            '검색 기능 구현',
            '리뷰 페이지 디자인 및 서버 구축'
        ]
    },
    {
        title: 'Pretzel (학원 2차 팀 프로젝트)',
        period: '2024.06 ~ 2024.08',
        description: '영화 OTT 웹사이트',
        detailedDescription: 'AI 알고리즘을 활용한 영화 OTT 사이트입니다.',
        techStack: ['HTML5', 'CSS3', 'Javascript', 'React', 'Next.js', 'Axios', 'MUI' , 'Styled-Components' ],
        image: '/images/project/Pretzel.png',
        githubLink: 'https://github.com/GojaeDoo/Pretzel',
        features: [
            '메인 페이지 (화면 구현 및 데이터 연동)',
            '회원가입 및 로그인 (화면 구현 및 데이터 연동)',
            '카카오 & 네이버 아이디 로그인 연동',
            '검색 및 검색 결과 페이지 구현 (화면 구현 및 데이터 연동)',
            'FAQ 페이지 (화면 구현 및 데이터 연동)',
            '문의 페이지 (화면 구현 및 데이터 연동)',
            '프로필 페이지(화면 구현 및 데이터 연동)',
            '공지사항 페이지(화면 구현 및 데이터 연동)'
        ]
    },
    {
        title: '포트폴리오 웹 사이트 (개인 프로젝트)',
        period: '2025.06 ~ 2025.07',
        description: '개인 포트폴리오 웹사이트',
        detailedDescription: '개인 포트폴리오를 위한 반응형 웹사이트입니다. TypeScript와 Next.js를 활용하여 개발했으며, 애니메이션과 인터랙티브한 요소들을 포함하고 있습니다.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Styled-Components'],
        image: '/images/project/myWeb.png',
        githubLink: 'https://github.com/GojaeDoo/hyeonmin_portfolio',
        features: [
            '반응형 웹 디자인',
            '스크롤 기반 애니메이션',
            '인터랙티브 네비게이션',
            '프로젝트 모달 시스템',
            '다크 테마 디자인',
            '모달 시스템',
        ]
    },
    {
        title: 'CODIDRIP (개인프로젝트)',
        period: '2025.03 ~ 2025.07',
        description: '코디 공유 웹사이트',
        detailedDescription: '패션 코디를 공유하고 소통할 수 있는 소셜 플랫폼입니다. 풀스택 개발을 통해 프론트엔드와 백엔드를 모두 구현했습니다.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Styled-Components' , 'Axios' , 'Node.js' , 'Express', 'PostgreSQL' , 'Vercel' , 'Render' , 'Supabase'],
        image: '/images/project/CodiDrip.png',
        githubLink: 'https://github.com/GojaeDoo/CodiDrip',
        demoLink: 'https://codi-drip-frontend.vercel.app',
        features: [
            '사용자 인증 및 계정 관리 (회원가입 / 로그인 / 아이디 찾기 / 비밀번호 찾기 / JWT 토큰 기반 인증)',
            '프로필 관리 (프로필 생성 / 프로필 수정 / 프로필 삭제)',
            'Drip게시글 기능 (작성 / 수정 / 태그 / 좋아요 / 저장 / 댓글 / 필터링 / 스타일 카테고리) ',
            '팔로우 시스템 (팔로우 / 언팔로우 / 팔로워 / 팔로잉 목록 / 팔로우 상태 확인)',
            '자유게시판 (작성 / 댓글 / 권한 관리 / 사용자별 게시글 조회)',
            '검색 기능 (검색 / 자유게시판 검색 / 키워드 기반 검색)',
            '신고 시스템 (게시글 / 자유게ㅣ판 신고 / 신고 사유 분류 / 중복 신고 방지 / 관리자 신고 처리)',
            '반응형 디자인 (모바일 / 데스크톱)',
            '기술적 특징 (이미지 스토리지 / 데이터베이스 / API보안 / 파일 업로드 / 이메일 서비스 / 비밀번호 암호화)',
            '관리자 기능 (신고 관리 / 사용자 관리 / 콘텐츠 모더레이션)',
            '테마 시스템 (다크 / 라이트)',
            '스켈레톤 로딩',
            '모달 시스템'
        ]
    }
];

export const ProjectContainer: React.FC<ProjectContainerProps> = () => {
    const [visible, setVisible] = useState<boolean[]>(Array(projects.length).fill(false));
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const projectCards = document.querySelectorAll('[data-project-card]');
        
        projectCards.forEach((el, idx) => {
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => { 
            observers.forEach(o => o.disconnect()); 
        };
    }, []);

    const handleProjectClick = (project: ProjectData) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const handleNavigate = (section: string) => {
        const sectionId = section === 'about' ? 'about' : section === 'skill' ? 'skills' : section;
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ProjectPresenter
            projects={projects}
            visible={visible}
            selectedProject={selectedProject}
            isModalOpen={isModalOpen}
            onProjectClick={handleProjectClick}
            onCloseModal={handleCloseModal}
            onNavigate={handleNavigate}
        />
    );
};

export default ProjectContainer; 