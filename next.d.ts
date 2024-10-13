type NextLayout<P = void> = (props: Readonly<{ children: React.ReactNode; params: P }>) => React.ReactNode
type NextPage<P = void, SP = void> = (props: Readonly<{ params: P; searchParams: SP }>) => React.ReactNode
type NextRoute<P = void> = (request: Request, context: Readonly<{ params: P }>) => Response | Promise<Response>
