import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-white to-gray-50">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            당신의 비즈니스를 위한<br />
            <span className="text-blue-600">최고의 SaaS 솔루션</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
            더 빠르고 효율적인 비즈니스 성장을 위한 올인원 플랫폼. 
            지금 시작하여 귀사의 성장을 가속화하세요.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg">
              무료로 시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              데모 신청하기
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">요금제</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">/월</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    선택하기
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const features = [
  {
    title: "실시간 분석",
    description: "데이터 기반의 의사결정을 위한 실시간 비즈니스 인사이트를 제공합니다."
  },
  {
    title: "자동화 워크플로우",
    description: "반복적인 작업을 자동화하여 업무 효율성을 극대화합니다."
  },
  {
    title: "통합 대시보드",
    description: "모든 비즈니스 데이터를 한눈에 파악할 수 있는 직관적인 대시보드를 제공합니다."
  }
];

const pricingPlans = [
  {
    name: "스타터",
    price: "₩29,000",
    features: [
      "기본 분석 기능",
      "5GB 스토리지",
      "이메일 지원",
      "기본 API 접근"
    ]
  },
  {
    name: "프로",
    price: "₩99,000",
    features: [
      "고급 분석 기능",
      "50GB 스토리지",
      "24/7 우선 지원",
      "전체 API 접근"
    ]
  },
  {
    name: "엔터프라이즈",
    price: "맞춤형",
    features: [
      "커스텀 솔루션",
      "무제한 스토리지",
      "전담 매니저",
      "맞춤형 개발 지원"
    ]
  }
];
