import type {ReactNode} from 'react';

interface InfoCardProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}

export default function InfoCard({title, icon, children}: InfoCardProps){
    return (
        <div className="bg-card shadow-md rounded-xl p-6 text-left">
            {icon && <div className="mb-3 text-primary">{icon}</div>}
            <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
            <div className="space-y-2 text-muted-foreground">{children}</div>
        </div>
  );
}