import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="default">Search</Button>
      <Button variant="secondary">Filter</Button>
      <Button>Advance Search</Button>

      <Card className="hover:shadow-lg transition" />
      <Badge className="bg-secondary text-secondary-foreground" />

    </div>
  );
}
