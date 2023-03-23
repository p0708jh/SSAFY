#include <stdio.h>
#include <string.h>

int main()
{
    while (1)
    {
        char str[100] = "";

        printf("SSAFY_ECHOBOT>>");
        scanf("%s", str);

        if (!strcmp(str, "bye") || !strcmp(str, "Bye") || !strcmp(str, "bYe") || !strcmp(str, "byE") || !strcmp(str, "BYe") || !strcmp(str, "ByE") || !strcmp(str, "bYE") || !strcmp(str, "BYE") || !strcmp(str, "bye") || !strcmp(str, "Bye") || !strcmp(str, "bYe") || !strcmp(str, "byE") || !strcmp(str, "BYe") || !strcmp(str, "ByE") || !strcmp(str, "bYE") || !strcmp(str, "BYE") ||
            !strcmp(str, "exit") || !strcmp(str, "Exit") || !strcmp(str, "eXit") || !strcmp(str, "exIt") || !strcmp(str, "exiT") || !strcmp(str, "EXit") || !strcmp(str, "ExIt") ||
            !strcmp(str, "ExiT") || !strcmp(str, "eXIt") || !strcmp(str, "eXiT") || !strcmp(str, "exIT") || !strcmp(str, "EXIt") || !strcmp(str, "EXiT") || !strcmp(str, "ExIT") ||
            !strcmp(str, "eXIT") || !strcmp(str, "EXIT"))
            return 0;
        else
            printf("%s\n", str);


    }
}