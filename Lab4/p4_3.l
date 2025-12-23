%option noyywrap

%{
#include <stdio.h>
int count=0;
%}

%%

\/\/.*\n {printf("%s\n",yytext);count++;}
\/\*(.*\n)*.*\*\/ {printf("%s\n", yytext);count++;}
.|\n {fprintf(yyout,"%s",yytext);}

%%

void main()
{
	yyin=fopen("input.c", "r");
	yyout=fopen("output.txt","w");
	yylex();
	printf("Number of comment lines are: %d\n",count);
}

