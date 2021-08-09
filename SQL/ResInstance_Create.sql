USE [master]
GO

IF db_id('ResInstance') IS NOT NULL
BEGIN
  ALTER DATABASE [ResInstance] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
  DROP DATABASE [ResInstance]
END
GO

CREATE DATABASE [ResInstance]
GO

USE [ResInstance]
GO

---------------------------------------------------------------------------


CREATE TABLE [Users] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [FirebaseUserId] nvarchar(255) NOT NULL,
  [Username] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255) NOT NULL,
  [RegisterDate] datetime NOT NULL,
  [AvatarUrl] nvarchar (255),
  [UserTypeId] integer NOT NULL
)
GO

CREATE TABLE [UserTypes] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Avatars] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [Url] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [ResInstances] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [Date] datetime NOT NULL,
  [UserId] int NOT NULL,
  [BeforeMood] nvarchar(255) NOT NULL,
  [AfterMood] nvarchar(255) NOT NULL,
  [UserWeight] int NOT NULL,
  [Journal] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Exercises] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [Name] nvarchar(255),
  [Sets] int NOT NULL,
  [Reps] int NOT NULL,
  [Description] text NOT NULL,
  [URL] nvarchar(255)
)
GO

CREATE TABLE [ResInstanceExercises] (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [ResInstanceId] int NOT NULL,
  [ExerciseId] int NOT NULL,
  [Weight] int NOT NULL,
  [Difficulty] int NOT NULL
)
GO

CREATE TABLE Meals (
  [Id] int PRIMARY KEY IDENTITY(1, 1) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [ResInstanceId] int NOT NULL,
  [Calories] int NOT NULL
)
GO