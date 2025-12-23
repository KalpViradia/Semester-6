%option noyywrap

%{
int c=0,l=0,w=0;
%}

%%

[a-zA-Z0-9]* {w++;c+=yyleng;}
. {c++;}
\n {c++;l++;}

%%

void main()
{
	yyin=fopen("input.txt","r");
	yylex();
	printf("No of characters: %d\nNo of words: %d\nNo od lines: %d\n",c,w,l);
}