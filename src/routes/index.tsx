import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent, CardHeader } from "@/components/ui/8bit/card";
import { TypewriterText } from "@/components/ui/8bit/typewriter-text";

export const Route = createFileRoute("/")({ component: MainScreen });

function MainScreen() {
	return (
		<main className="min-h-screen retro-bg flex flex-col items-center justify-center p-4">
			<Card className="max-w-md w-full text-center pt-10">
				<CardHeader>
					<div className="h-12 md:h-16 flex items-center justify-center">
						<TypewriterText
							text="DEV QUESTS"
							className="text-4xl md:text-5xl text-primary font-bold"
							speed={150}
						/>
					</div>
					<div className="h-6 mt-2">
						<TypewriterText
							text="Level up your portfolio with these project ideas."
							className="text-muted-foreground pixelated text-sm"
							speed={50}
							delay={2000}
						/>
					</div>
				</CardHeader>
				<CardContent className="space-y-4 flex flex-col items-center mt-6 px-4 pb-6 overflow-visible">
					<Link to="/quests" className="w-full">
						<Button className="w-full text-lg h-14 retro-hover-effect">
							START GAME
						</Button>
					</Link>

					<div className="flex flex-col sm:flex-row gap-2  w-full">
						<a
							href="https://x.com/kapish_dima"
							target="_blank"
							rel="noreferrer"
							className="w-full flex-1"
						>
							<Button
								variant="outline"
								className="w-full retro-hover-effect text-sm sm:text-base"
							>
								X (Twitter)
							</Button>
						</a>
						<a
							href="https://github.com/kapishdima/quests"
							target="_blank"
							rel="noreferrer"
							className="w-full flex-1 min-w-0"
						>
							<Button
								variant="outline"
								className="w-full retro-hover-effect text-sm sm:text-base"
							>
								GitHub
							</Button>
						</a>
					</div>
				</CardContent>
			</Card>

			<div className="mt-8 text-xs text-muted-foreground opacity-50 pixelated">
				PRESS START TO BEGIN
			</div>
		</main>
	);
}
