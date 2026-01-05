export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-border">
            <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Eric Lee. All rights reserved.</p>
            </div>
        </footer>
    );
}
