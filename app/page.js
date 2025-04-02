import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="page-title">
          Welcome to <span className="text-blue-600">ReelLink</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          당신의 이야기를 공유하세요
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">쉬운 공유</h3>
          <p className="text-gray-600">
            간단하게 당신의 이야기를 공유하고 다른 사람들과 소통하세요.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2">실시간 소통</h3>
          <p className="text-gray-600">
            실시간으로 다른 사용자들과 이야기를 나눠보세요.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2">안전한 저장</h3>
          <p className="text-gray-600">
            당신의 소중한 콘텐츠를 안전하게 저장하고 관리하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
