import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="p-5">
            <Button>
                <span className="text-lg">WhatsApp Clone</span>
            </Button>

            <div className="mt-5">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
