import { MusicIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

function Login() {

    function handleLogin() {
        window.location.href = "http://127.0.0.1:8080/api/auth/spotify";
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#121212] to-black p-4">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#1DB954]" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="text-white text-3xl font-bold">Spotify</span>
                    </div>
                </div>

                <Card className="border-none bg-[#181818] text-white shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Welcome to Music Explorer</CardTitle>
                        <CardDescription className="text-gray-400">
                            Discover your favorite artists, albums and tracks!
                        </CardDescription>
                        <CardContent className="flex flex-col items-center space-y-6 pt-4">
                            <div className="relative w-32 h-32 rounded-full bg-spotify-gray flex justify-center items-center">
                                <MusicIcon className="w-16 h-16 text-spotify-green" />
                            </div>
                            <p className="text-center text-gray-300">
                                Connect with your Spotify account to explore your music taste, discover new artist, and view detailed information about your favorite albums.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4 mt-4">
                            <Button
                                className="w-full bg-spotify-green hover:bg-[#1ed760] text-black font-bold py-6 text-lg"
                                onClick={handleLogin}
                            >
                                Connect with Spotify
                            </Button>
                            <p className="text-xs text-center text-gray-500 px-4">By continuing, you agree to our Terms of Service and Privacy Policy. This app requires access to your Spotify Account Data.</p>
                        </CardFooter>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Login;