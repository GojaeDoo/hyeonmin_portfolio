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
            '신고 시스템 (게시글 / 자유게시판 신고 / 신고 사유 분류 / 중복 신고 방지 / 관리자 신고 처리)',
            '반응형 디자인 (모바일 / 데스크톱)',
            '기술적 특징 (이미지 스토리지 / 데이터베이스 / API보안 / 파일 업로드 / 이메일 서비스 / 비밀번호 암호화)',
            '관리자 기능 (신고 관리 / 사용자 관리 / 콘텐츠 모더레이션)',
            '테마 시스템 (다크 / 라이트)',
            '스켈레톤 로딩',
            '모달 시스템'
        ],
        troubleShooting: [
            {
                challenge: 'DRIP과 자유게시판에서 부모-자식 관계를 가진 계층형 댓글 시스템 구현',
                solution: 'parent_id 필드를 활용한 재귀적 댓글 구조와 대댓글 조회 로직 구현',
                reason: '사용자들이 <strong>댓글에 답글을 달 수 있는 기능</strong>을 원했는데, 처음에는 <span>단순한 댓글 배열</span>로만 구현했습니다. <strong>parent_id를 활용한 계층형 구조</strong>를 설계하여 <span>댓글과 답글의 관계를 명확히 정의</span>할 수 있었습니다. 처음에는 <strong>데이터 구조 설계</strong>가 어려웠는데, 이번 기회에 <span>재귀적 데이터 관리</span>에 대해 많이 배웠습니다.'            
            },
            {
                challenge: '사용자 간 팔로우 관계의 상태 관리와 실시간 업데이트',
                solution: '팔로우/언팔로우 토글 시스템과 팔로워/팔로잉 목록 조회 최적화',
                reason: '사용자들이 <strong>서로를 팔로우할 수 있는 기능</strong>을 원했는데, <span>팔로우 상태를 어떻게 관리할지</span>가 고민이 되었고 <strong>user_follow 테이블을 별도로 만들어서</strong> <span>팔로워와 팔로잉의 관계를 명확히 정의</span>하고, <strong>토글 방식으로 팔로우 상태를 변경</strong>할 수 있게 했습니다. <span>팔로워/팔로잉 목록을 효율적으로 조회</span>하는 방법도 고민했는데, <strong>데이터베이스 조인과 인덱싱</strong>에 대해 알게되었습니다.'
            },
            {
                challenge: '사용자가 동일한 콘텐츠를 중복 신고하는 것을 방지하고 신고 데이터의 일관성 유지',
                solution: '신고 대상 타입별 중복 체크 로직과 트랜잭션 기반 신고 처리 시스템',
                reason: '사용자들이 <strong>같은 게시글을 여러 번 신고</strong>하거나, <span>신고 데이터가 일관되지 않은 문제</span>가 발생했습니다. 처음에는 <strong>신고 기능 자체를 구현하는 것</strong>도 어려웠는데, <strong>신고 대상 타입별 중복 체크</strong>를 구현하여 <span>중복 신고를 방지</span>하고, <strong>데이터베이스 트랜잭션</strong>을 활용하여 <span>신고 데이터의 무결성</span>을 보장했습니다.'
            },
            {
                challenge: 'DRIP 게시글과 댓글의 좋아요 상태와 저장 상태를 효율적으로 관리',
                solution: '좋아요/저장 테이블을 통한 상태 추적과 토글 시스템 구현',
                reason: '사용자들이 <strong>게시글을 좋아요하거나 저장할 수 있는 기능</strong>을 원했는데, <span>좋아요/저장 상태를 어떻게 관리할지</span>가 문제였고 <strong>drip_post_like와 drip_post_mark 테이블</strong>을 만들어서 <span>사용자별 좋아요/저장 상태를 관리</span>하고, <strong>토글 방식으로 상태를 변경</strong>할 수 있게 했습니다. <span>좋아요/저장 개수도 실시간으로 계산</span>해서 <strong>사용자 경험을 향상</strong>시켰습니다.'
            },
            {
                challenge: 'DRIP 게시글 목록 조회 시 대용량 데이터 처리와 응답 시간 급격한 증가 문제',
                solution: 'N+1 쿼리 문제 해결, 이미지 URL 배치 처리 최적화, 페이지네이션 시스템 구축',
                reason: '사용자들이 <strong>DRIP 게시글을 조회할 때 시간이 오래 걸리는 문제</strong>가 있었습니다. <span>게시글이 적을 때는 괜찮겠지만</span>, <strong>게시글이 100개 이상 쌓일 경우에 응답 시간이 급격하게 느려질것을 예상되어</strong>, <span>성능 분석을 해보니 N+1 쿼리 문제</span>와 <strong>이미지 URL 처리 비효율성</strong>원인이 될것같아 <span>CTE를 활용한 쿼리 최적화</span>와 <strong>이미지 URL 배치 처리</strong>, <span>페이지네이션 시스템</span>을 구현해서 <strong>응답 시간을 단축</strong>시켰습니다. <strong>데이터베이스 쿼리 최적화의 중요성</strong>과 <span>대용량 데이터 처리 기법</span>에 대해 더 면밀히 공부하겠습니다.'
            },
            {
                challenge: 'DRIP과 자유게시판에서 키워드 검색 시 대용량 데이터 처리와 검색 정확도 향상',
                solution: '데이터베이스 인덱싱과 검색 쿼리 최적화, 검색 결과 랭킹 시스템',
                reason: '사용자가 <strong>검색을 할 때마다 기다려야 하는 문제</strong>가 있었습니다. 처음에는 <span>단순한 LIKE 검색</span>만 사용했는데, <strong>데이터가 많아지니까 속도가 느려졌습니다.</strong>. <span>데이터베이스 인덱스</span>를 추가하고 <strong>검색 쿼리를 효율적으로 구성</strong>하여 <span>검색 성능을 향상</span>시켰습니다. <strong>성능 최적화의 중요성</strong>과 <span>데이터베이스 쿼리 최적화</span>에 대해 많이 배웠습니다.'
            },
            {
                challenge: '프로필 이미지와 DRIP 게시글 이미지를 효율적으로 업로드하고 관리',
                solution: 'Multer를 활용한 이미지 업로드와 Supabase Storage 연동 시스템',
                reason: '사용자들이 <strong>프로필 이미지와 게시글 이미지를 업로드</strong>할 수 있는 기능을 원했는데, <span>이미지 파일을 어떻게 처리할지</span>에 대해 고민이 많았습니다. <strong>Multer 미들웨어</strong>를 사용해서 <span>이미지 파일을 메모리에 저장</span>하고, <strong>Supabase Storage API</strong>를 통해 <span>클라우드에 업로드</span>하는 시스템을 만들었습니다. <span>이미지 파일명 중복 방지</span>도 고민했는데, <strong>타임스탬프와 랜덤 문자열 조합</strong>으로 해결했습니다.'
            },
            {
                challenge: '프로필 이미지와 DRIP 게시글 이미지를 별도 스토리지 버킷으로 분리하여 관리',
                solution: 'StorageService를 통한 이미지 타입별 분리 업로드와 개별 관리 시스템',
                reason: '처음에는 <strong>모든 이미지를 한 곳에</strong> 올렸는데, <span>프로필 이미지와 게시글 이미지가 섞여서</span> 관리하기가 어려웠습니다. <strong>별도 스토리지 버킷</strong>으로 분리하여 <span>이미지 타입별 독립적 관리</span>가 가능해졌고, <strong>StorageService 클래스</strong>를 통해 <span>이미지 업로드 로직을 중앙화</span>했습니다. <strong>파일 구조 설계의 중요성</strong>을 많이 느꼈습니다.'
            },
            {
                challenge: '사용자 로그인과 권한 검증을 통한 안전한 API 접근 제어',
                solution: 'JWT 토큰 기반 인증과 미들웨어를 통한 권한 검증 시스템',
                reason: '사용자들이 <strong>로그인한 상태에서만 특정 기능을 사용</strong>할 수 있도록 하고 싶었는데, <span>API 접근을 어떻게 제어할지</span>고민이었습니다. <strong>JWT 토큰</strong>을 사용해서 <span>사용자 인증 상태를 관리</span>하고, <strong>미들웨어를 통해</strong> <span>보호된 API에 대한 접근을 제어</span>했습니다. <span>토큰 검증과 권한 체크</span>에 대해 많이 배웠습니다.'
            },
            {
                challenge: '복잡한 조인과 서브쿼리를 포함한 데이터베이스 쿼리 성능 최적화',
                solution: 'CTE(Common Table Expression)와 인덱스를 활용한 쿼리 최적화',
                reason: '사용자들이 <strong>좋아요, 저장, 댓글 정보를 포함한 게시글 목록</strong>을 조회할 때 <span>쿼리 성능이 느려지는 문제</span>가 있었습니다. <strong>CTE를 활용한 임시 테이블</strong>을 만들어서 <span>복잡한 조인을 단순화</span>하고, <strong>적절한 인덱스</strong>를 추가하여 <span>쿼리 실행 속도를 향상</span>시켰습니다. <strong> 보수하는 과정에서 데이터베이스 성능 튜닝</strong>에 대해 알게되었고 더 깊게 공부하겠습니다.'
            },
            {
                challenge: '이미지 업로드 시 파일명 중복과 보안 취약점 방지',
                solution: '타임스탬프와 랜덤 문자열을 조합한 고유 파일명 생성 시스템',
                reason: '처음에는 <strong>사용자가 올린 원본 파일명</strong>을 그대로 사용했는데, <span>같은 이름의 파일이 덮어써지는 문제</span>와 <strong>악성 파일명으로 인한 보안 위험</strong>이 있었거든요. <span>타임스탬프와 랜덤 문자열을 조합</span>해서 <strong>고유한 파일명을 생성</strong>하는 시스템을 만들었습니다. 이렇게 하니까 <span>파일 충돌도 방지</span>되고 <strong>보안성도 향상</strong>되었습니다.'
            }
        ],
        projectReflection: [
            {
                title: '프로젝트를 시작한 이유',
                content: '프론트엔드 개발자로서 디자이너, 기획자, 백엔드 개발자와 막힘없이 소통하고 시너지 있게 일하기 위해서는, 그들이 하는 일에 대해 어느 정도 알고 있어야 하고 제대로 알기 위해선 직접 경험해봐야 한다고 생각했습니다. 단순히 API 명세서만 받아서 개발하는 것이 아니라, 전체적인 개발 과정을 이해하고 각 역할의 고민과 어려움을 체험해보고 싶었습니다.'
            },
            {
                title: '마무리',
                content: `처음에는 막막하고 어려웠지만, 단계별로 하나씩 해결해나가면서 많은 것을 배울 수 있었습니다. 프론트엔드 개발자로서 다른 역할들을 경험해본 것은 정말 값진 경험이었고, 앞으로 팀 프로젝트에서 더 나은 소통과 협업을 할 수 있을 것 같습니다.<br/>`
            }
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
        ],
        projectReflection: [
            {
                title: '프로젝트를 시작한 이유',
                content: '개인 포트폴리오를 체계적으로 정리하고, 현재까지의 기술 스택과 프로젝트 경험을 시각적으로 표현하고 싶었습니다. Next.js와 TypeScript를 활용한 현대적인 웹 개발을 경험해보고, 사용자 경험을 중시하는 인터랙티브한 디자인을 구현해보고 싶었습니다.'
            },
            {
                title: '마무리',
                content: '포트폴리오 웹사이트를 통해 기술적 역량을 시각화할 수 있었고, 사용자 중심의 디자인과 개발 경험을 쌓을 수 있었습니다. 앞으로 더 나은 사용자 경험을 제공하는 웹사이트를 만들어나가겠습니다.<br/>'
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