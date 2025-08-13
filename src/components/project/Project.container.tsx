'use client'

import React, { useEffect, useState } from 'react';
import ProjectPresenter from './Project.presenter';
import { ProjectData} from './Project.types';

const projects: ProjectData[] = [
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
    },
    {
        title: '포트폴리오 웹 사이트 (개인 프로젝트)',
        period: '2025.06 ~ 2025.08',
        description: '개인 포트폴리오 웹사이트',
        detailedDescription: '개인 포트폴리오를 위한 반응형 웹사이트입니다. TypeScript와 Next.js를 활용하여 개발했습니다.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Styled-Components'],
        image: '/images/project/myWeb.png',
        githubLink: 'https://github.com/GojaeDoo/hyeonmin_portfolio',
        demoLink: 'https://hyeonmin-portfolio.vercel.app/',
        features: [
            '반응형 웹 디자인',
            '스크롤 기반 애니메이션',
            '인터랙티브 네비게이션',
            '프로젝트 모달 시스템',
            '다크 테마 디자인',
            '모달 시스템',
        ],
        troubleShooting: [
            {
                challenge: 'styled-components SSR 설정으로 인한 초기 렌더링 시 스타일 깜빡임 현상',
                solution: 'ServerStyleSheet을 활용한 styled-components SSR 설정으로 FOUC 문제 해결',
                reason: '처음에 스타일이 깜빡이는 문제가 발생해서 사용자 경험이 좋지 않다는 것을 느꼈습니다. <strong>FOUC</strong>라는 용어를 알게 되면서 <span>서버 사이드 렌더링</span>의 중요성을 깨달았습니다. <strong>ServerStyleSheet</strong>을 사용하니까 <span>초기 로딩 시에도 스타일이 바로 적용</span>되어서 문제가 해결되었습니다.'
            },
            {
                challenge: 'Intersection Observer API를 활용한 애니메이션에서 성능 최적화 필요',
                solution: 'Intersection Observer disconnect를 통한 메모리 누수 방지 및 성능 최적화',
                reason: '<strong>Intersection Observer</strong>를 처음 사용할 때는 <span>메모리 누수</span>에 대해 잘 몰랐습니다. <strong>컴포넌트가 사라져도 observer가 계속 실행</strong>되고 있다는 걸 나중에 알게 되었고, <strong>disconnect</strong>를 해주니까 <span>성능이 훨씬 좋아졌습니다</span>. 이런 기본적인 것들을 놓치지 말아야겠다는 생각이 들었습니다.'
            },
            {
                challenge: 'Container/Presenter 패턴 적용 시 상태 관리와 이벤트 핸들링 로직 분리',
                solution: '컨테이너에서 로직 관리, 프레젠터에서 UI 렌더링하는 명확한 역할 분리',
                reason: '처음에는 모든 로직을 한 컴포넌트에 다 넣어서 코드가 복잡해졌는데 <strong>관심사 분리</strong>의 중요성을 느끼고 <span>Container/Presenter 패턴</span>을 적용해봤는데, 코드가 훨씬 깔끔해지고 <span>유지보수하기 쉬워졌습니다.</span> 아직 많이 부족하지만 이런 패턴들을 하나씩 익혀나가겠습니다.'
            },
            {
                challenge: '반응형 디자인 및 일관된 애니메이션 효과 구현',
                solution: 'CSS 미디어 쿼리와 JavaScript 이벤트 리스너를 조합한 반응형 애니메이션 구현',
                reason: '모바일과 데스크톱에서 <strong>일관된 사용자 경험</strong>을 제공하는 게 생각보다 어려웠습니다. <span>CSS만으로는 복잡한 애니메이션 제어가 어렵고</span>, <span>JavaScript만으로는 디바이스별 최적화가 어려워서</span> 두 기술을 조합해서 사용했습니다. 아직 완벽하지는 않지만 능숙하게 사용하기 위해 더욱 더 정진하겠습니다.'
            },
            {
                challenge: 'TypeScript 타입 정의 시 styled-components props 전달 문제',
                solution: 'shouldForwardProp을 활용한 DOM 전달 불필요한 props 필터링으로 TypeScript 경고 해결',
                reason: '<strong>styled-components에서 커스텀 props를 사용할 때</strong> <span>TypeScript 경고가 자꾸 발생</span>했습니다. 조사해보니 <span>shouldForwardProp</span>이라는 걸 알게 되고 사용해보니까 <strong>경고가 사라지고</strong> <span>DOM에 불필요한 속성이 추가되는 것도 방지</span>할 수 있었습니다. 이러한 점들을 더 심도있게 공부해서 지식을 넓혀가야 되겠다라는 목표가 생겼습니다.'
            }
        ]
    }
];

export const ProjectContainer: React.FC = () => {
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