interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-1">{title}</h1>
      {description && (
        <p className="text-zinc-400 dark:text-zinc-500 text-sm">{description}</p>
      )}
    </div>
  );
}
