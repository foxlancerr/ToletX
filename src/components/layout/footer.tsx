// src/components/layout/footer.tsx
export function Footer() {
    return (
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
          Copyright {new Date().getFullYear()} ・ ToletX, All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }