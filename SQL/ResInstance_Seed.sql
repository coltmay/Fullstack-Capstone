USE [ResInstance]
GO

SET IDENTITY_INSERT [UserTypes] ON
INSERT INTO [UserTypes]
  ([Id], [Name])
VALUES 
  (1, 'admin'), 
  (2, 'user');
SET IDENTITY_INSERT [UserTypes] OFF

SET IDENTITY_INSERT [Users] ON
INSERT INTO [Users]
  ([Id], [FirebaseUserId], [Username], [Email], [FirstName], [LastName], [RegisterDate], [AvatarUrl], [UserTypeId])
VALUES 
  (1, 'gxv2mK6lRfSQADcL0D9QZMxu5jr1', 'CharlesM', 'charles@email.com', 'Charles', 'Mingus', '2019-10-3', 'https://res.cloudinary.com/dezokheym/image/upload/v1627913874/resinstance/orangeprofile_rek6h0.png', 1), 
  (2, 'I9ifoqBNr2ZZBqgCXegBCjRmhBa2', 'SJop', 'scott@email.com', 'Scott', 'Joplin', '2021-11-5', 'https://res.cloudinary.com/dezokheym/image/upload/v1627913874/resinstance/orangeprofile_rek6h0.png', 2);
SET IDENTITY_INSERT [Users] OFF

SET IDENTITY_INSERT [ResInstances] ON
INSERT INTO [ResInstances]
  ([Id], [Date], [UserId], [BeforeMood], [AfterMood], [UserWeight], [Journal])
VALUES 
  (1, '2020-11-4', '1', 'U+1F643', 'U+1F600', 195, 'Lifted a lot today.  Feeling good.'), 
  (2, '2020-12-5', '2', 'U+F610', 'U+1F915', 330, 'Hurt myself.  Cannot lift for awhile.');
SET IDENTITY_INSERT [ResInstances] OFF

SET IDENTITY_INSERT [Exercises] ON
INSERT INTO [Exercises]
  ([Id], [Name], [Sets], [Reps], [Description])
VALUES 
  (1, 'Bent Over Dumbbell Row', 3, 15, 'Assume a standing position while holding a dumbbell in each hand with a neutral grip.
    Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.
    Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.
    Repeat for the desired number of repetitions.'), 
  (2, 'Dumbbell Lateral Raise', 3, 15, 'The dumbbell lateral raise is one of those exercises that so many people do incorrectly. First, this is an isolation exercise, so you should be focusing on stretch and muscle contraction, not using heavy weights.
    Second, you MUST keep your rep timing slow and controlled. So many people use momentum to swing heavy weights up, and this is not going to get you the best results from the dumbbell lateral raise.
    Third, it very important that your elbows stay above your wrists. If your wrists come up too far, the focus comes off your side delts and onto your front delts. A good trick to ensure this does not happen is to tilt the dumbbells down as if you were pouring a jug of water as you raise them up. This makes it very hard to raise the wrists higher than the elbows.
    And finally, keep the side delts under stress for the whole set by not allowing the dumbbells to touch your body or "hang" at the bottom of the movement.');
SET IDENTITY_INSERT [Exercises] OFF

SET IDENTITY_INSERT [ResInstanceExercises] ON
INSERT INTO [ResInstanceExercises]
  ([Id], [ResInstanceId], [ExerciseId], [Weight], [Difficulty])
VALUES 
  (1, 1, 1, 50, 9),
  (2, 1, 2, 20, 2);
SET IDENTITY_INSERT [ResInstanceExercises] OFF

SET IDENTITY_INSERT [Meals] ON
INSERT INTO [Meals]
  ([Id], [Name], [ResInstanceId], [Calories])
VALUES 
  (1, 'Banana', 1, 90),
  (2, 'Oatmeal', 1, 150),
  (3, 'Chicken Breast', 2, 300);
SET IDENTITY_INSERT [Meals] OFF