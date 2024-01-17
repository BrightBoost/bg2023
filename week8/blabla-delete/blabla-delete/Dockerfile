#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["blabla-delete/blabla-delete.csproj", "blabla-delete/"]
RUN dotnet restore "blabla-delete/blabla-delete.csproj"
COPY . .
WORKDIR "/src/blabla-delete"
RUN dotnet build "blabla-delete.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blabla-delete.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "blabla-delete.dll"]