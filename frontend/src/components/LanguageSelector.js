import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageSelector({ variant = 'default', className = '' }) {
  const { language, setLanguage, languages, languageNames, languageFlags } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant === 'ghost' ? 'ghost' : 'outline'} 
          size="sm" 
          className={`gap-2 ${className}`}
          data-testid="language-selector"
        >
          <img 
            src={languageFlags[language]} 
            alt={languageNames[language]}
            className="w-5 h-4 object-cover rounded-sm"
          />
          <span className="hidden sm:inline">{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`cursor-pointer ${language === lang ? 'bg-accent' : ''}`}
            data-testid={`lang-${lang}`}
          >
            <img 
              src={languageFlags[lang]} 
              alt={languageNames[lang]}
              className="w-6 h-4 object-cover rounded-sm mr-3"
            />
            <span>{languageNames[lang]}</span>
            {language === lang && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
