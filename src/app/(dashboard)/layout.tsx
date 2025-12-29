import { AppDownloadSection } from '@/components/common/app-download';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="flex-1">
                {children}
                <AppDownloadSection></AppDownloadSection>
            </main>
            <Footer></Footer>
        </>

    );
}