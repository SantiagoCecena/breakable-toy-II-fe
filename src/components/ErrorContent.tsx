import { isRouteErrorResponse, useNavigate } from "react-router";
import { Button } from "./ui/button";

function ErrorContent({ error }: { error: unknown }) {

    const navigate = useNavigate();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">404 - Not Found</h1>
                    <Button variant="ghost" size="sm" className="mt-4" onClick={() => navigate(-1)}>
                        Go back
                    </Button>
                </div>
            )
        }
    }
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <Button variant="ghost" size="sm" className="mt-4" onClick={() => navigate("/")}>
                Go Home
            </Button>
        </div>
    )
}

export default ErrorContent;