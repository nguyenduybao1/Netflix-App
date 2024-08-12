export default {
  items: [
    {
      id: "category1",
      title: "Phổ biến trên Netflix",
      movies: [
        {
          id: 1,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
          name: "The Witcher",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail: "https://i.imgur.com/TTJhbIZ.jpg",
              video: require("./movies/TheWitcher.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail: "https://i.imgur.com/TTJhbIZ.jpg",
              video: require("./movies/TheWitcher.mp4"),
            },
          ],
        },
        {
          id: 2,
          poster:
            "https://i.etsystatic.com/37635282/r/il/0550a0/4164530264/il_fullxfull.4164530264_8o71.jpg",
          name: "Iron Man",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "Iron Man là một siêu anh hùng hư cấu xuất hiện trong truyện tranh của Mỹ được xuất bản bởi Marvel Comics, cũng như các phương tiện truyền thông liên quan. Nhân vật này đã được sáng tác bởi nhà văn - nhà biên tập Stan Lee, được phát triển bởi Larry Lieber, và được thiết kế bởi họa sĩ Don Heck và Jack Kirby",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images.thedirect.com/media/article_full/iron-man-rdjs.jpg",
              video: require("./movies/IronMan.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://images.thedirect.com/media/article_full/iron-man-rdjs.jpg",
              video: require("./movies/IronMan.mp4"),
            },
          ],
        },
        {
          id: 3,
          poster:
            "https://bazaarvietnam.vn/wp-content/uploads/2023/09/One-Piece-live-action-Netflix.jpg",
          name: "One Piece",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Hoạt hình", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",
              video: require("./movies/OnePiece.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",

              video: require("./movies/OnePiece.mp4"),
            },
          ],
        },
        {
          id: 4,
          poster:
            "https://m.media-amazon.com/images/M/MV5BZTEwNDdmNDAtODhhNC00MTYyLWIzYmYtNWFkYjJkZmRlOGEwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
          name: "Raising Dion",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://m.media-amazon.com/images/M/MV5BYWU1ZTNmZDYtNjRkMS00NDBhLTkxNjEtZWUxY2M5YWY3MWI1XkEyXkFqcGdeQXVyMzU4OTg5NzA@._V1_.jpg",
              video: require("./movies/RaisingDion.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://m.media-amazon.com/images/M/MV5BYWU1ZTNmZDYtNjRkMS00NDBhLTkxNjEtZWUxY2M5YWY3MWI1XkEyXkFqcGdeQXVyMzU4OTg5NzA@._V1_.jpg",

              video: require("./movies/RaisingDion.mp4"),
            },
          ],
        },
        {
          id: 5,
          poster:
            "https://images2.thanhnien.vn/Uploaded/ngocthanh/2022_11_30/1-5206.jpg",
          name: "Wednesday",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",
              video: require("./movies/Wednesday.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",

              video: require("./movies/Wednesday.mp4"),
            },
          ],
        },
      ],
    },
    {
      id: "category2",
      title: "Hiện đang thịnh hành",
      movies: [
        {
          id: 1,
          poster:
            "https://m.media-amazon.com/images/I/91THlJb4lvL._AC_UF1000,1000_QL80_.jpg",
          name: "Spiderman: No Way Home",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
          ],
        },
        {
          id: 2,
          poster:
            "https://bazaarvietnam.vn/wp-content/uploads/2023/09/One-Piece-live-action-Netflix.jpg",
          name: "One Piece",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Hoạt hình", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",
              video: require("./movies/OnePiece.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",

              video: require("./movies/OnePiece.mp4"),
            },
          ],
        },
        {
          id: 3,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg",
          name: "MOANA",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
          ],
        },
        {
          id: 4,
          poster:
            "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
          name: "Avengers: Endgame",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
          ],
        },
        {
          id: 5,
          poster:
            "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          name: "Squid Game",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
          ],
        },
      ],
    },
    {
      id: "category3",
      title: "Được yêu thích nhất",
      movies: [
        {
          id: 1,
          poster:
            "https://bazaarvietnam.vn/wp-content/uploads/2023/09/One-Piece-live-action-Netflix.jpg",
          name: "One Piece",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Hoạt hình", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",
              video: require("./movies/OnePiece.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",

              video: require("./movies/OnePiece.mp4"),
            },
          ],
        },
        {
          id: 2,
          poster:
            "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          name: "Squid Game",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
          ],
        },
        {
          id: 3,
          poster:
            "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
          name: "Avengers: Endgame",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
          ],
        },
        {
          id: 4,
          poster:
            "https://m.media-amazon.com/images/I/91THlJb4lvL._AC_UF1000,1000_QL80_.jpg",
          name: "Spiderman: No Way Home",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
          ],
        },
        {
          id: 5,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
          name: "The Witcher",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail: "https://i.imgur.com/TTJhbIZ.jpg",
              video: require("./movies/TheWitcher.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail: "https://i.imgur.com/TTJhbIZ.jpg",
              video: require("./movies/TheWitcher.mp4"),
            },
          ],
        },
      ],
    },
    {
      id: "category4",
      title: "Trẻ em và gia đình",
      movies: [
        {
          id: 1,
          poster:
            "https://i.etsystatic.com/37635282/r/il/0550a0/4164530264/il_fullxfull.4164530264_8o71.jpg",
          name: "Iron Man",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "Iron Man là một siêu anh hùng hư cấu xuất hiện trong truyện tranh của Mỹ được xuất bản bởi Marvel Comics, cũng như các phương tiện truyền thông liên quan. Nhân vật này đã được sáng tác bởi nhà văn - nhà biên tập Stan Lee, được phát triển bởi Larry Lieber, và được thiết kế bởi họa sĩ Don Heck và Jack Kirby",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images.thedirect.com/media/article_full/iron-man-rdjs.jpg",
              video: require("./movies/IronMan.mp4"),
            },
            ,
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://m.media-amazon.com/images/M/MV5BYWU1ZTNmZDYtNjRkMS00NDBhLTkxNjEtZWUxY2M5YWY3MWI1XkEyXkFqcGdeQXVyMzU4OTg5NzA@._V1_.jpg",

              video: require("./movies/RaisingDion.mp4"),
            },
          ],
        },
        {
          id: 2,
          poster:
            "https://images2.thanhnien.vn/Uploaded/ngocthanh/2022_11_30/1-5206.jpg",
          name: "Wednesday",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",
              video: require("./movies/Wednesday.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",

              video: require("./movies/Wednesday.mp4"),
            },
          ],
        },
        {
          id: 3,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg",
          name: "MOANA",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
          ],
        },
        {
          id: 4,
          poster:
            "https://i.pinimg.com/originals/b2/32/26/b23226caecee7a8c198877e79c83a4d7.jpg",
          name: "Aquaman",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://cdn.moveek.com/storage/media/cache/large/75ee82f4d66dc6458306b811aff66370a269cd9d.jpg",
              video: require("./movies/Aquaman.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://cdn.moveek.com/storage/media/cache/large/75ee82f4d66dc6458306b811aff66370a269cd9d.jpg",
              video: require("./movies/Aquaman.mp4"),
            },
          ],
        },
        {
          id: 5,
          poster:
            "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
          name: "Avengers: Endgame",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
          ],
        },
      ],
    },
    {
      id: 'category5',
      title: 'Top Searches',
      movies : [
        {
          id: 1,
          poster:
            "https://bazaarvietnam.vn/wp-content/uploads/2023/09/One-Piece-live-action-Netflix.jpg",
          name: "One Piece",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Hoạt hình", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",
              video: require("./movies/OnePiece.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://funnyluffy.com/wp-content/uploads/2023/09/F5cLCKaacAMBgvB.jpg",
      
              video: require("./movies/OnePiece.mp4"),
            },
          ],
        },
        {
          id: 2,
          poster:
            "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          name: "Squid Game",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://vtv1.mediacdn.vn/zoom/640_400/2021/9/27/squidgame-16326976347651242914859.jpg",
              video: require("./movies/SquidGame.mp4"),
            },
          ],
        },{
          id: 3,
          poster:
            "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
          name: "Avengers: Endgame",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://genk.mediacdn.vn/139269124445442048/2020/4/29/9-15881673058231914020243.jpg",
              video: require("./movies/AvengersEndgame.mp4"),
            },
          ],
        },
        {
          id: 4,
          poster:
            "https://m.media-amazon.com/images/I/91THlJb4lvL._AC_UF1000,1000_QL80_.jpg",
          name: "Spiderman: No Way Home",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg",
              video: require("./movies/SPIDERMAN.mp4"),
            },
          ],
        },  {
          id: 5,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
          name: "The Witcher",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgearvn.com%2Fblogs%2Fcong-nghe%2Fphim-the-witcher-du-kien-den-7-mua-anh-em-tha-ho-ngam-sieu-nhan-nguoi-dep-va-quai-vat&psig=AOvVaw0k0OMU2xHlwazgJNMlCTQy&ust=1699295925916000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjGzOLArYIDFQAAAAAdAAAAABAD",
              video: require("./movies/TheWitcher.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgearvn.com%2Fblogs%2Fcong-nghe%2Fphim-the-witcher-du-kien-den-7-mua-anh-em-tha-ho-ngam-sieu-nhan-nguoi-dep-va-quai-vat&psig=AOvVaw0k0OMU2xHlwazgJNMlCTQy&ust=1699295925916000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjGzOLArYIDFQAAAAAdAAAAABAD",
              video: require("./movies/TheWitcher.mp4"),
            },
          ],
        },
        {
          id: 6,
          poster:
            "https://ph-live-02.slatic.net/p/9217deb55f11777990ccbdb0346c3be9.jpg",
          name: "Aquaman",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://cdn.moveek.com/storage/media/cache/large/75ee82f4d66dc6458306b811aff66370a269cd9d.jpg",
              video: require("./movies/Aquaman.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://cdn.moveek.com/storage/media/cache/large/75ee82f4d66dc6458306b811aff66370a269cd9d.jpg",
              video: require("./movies/Aquaman.mp4"),
            },
          ],
        },
        {
          id: 7,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg",
          name: "MOANA",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://images2.thanhnien.vn/zoom/736_460/Uploaded/congthang/2016_09_23/trangphucmoana3_SSLP.jpg",
              video: require("./movies/MOANA.mp4"),
            },
          ],
        },
        {
          id: 8,
          poster:
            "https://images2.thanhnien.vn/Uploaded/ngocthanh/2022_11_30/1-5206.jpg",
          name: "Wednesday",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",
              video: require("./movies/Wednesday.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://bazaarvietnam.vn/wp-content/uploads/2022/12/wednesday-addams-1.jpg",
      
              video: require("./movies/Wednesday.mp4"),
            },
          ],
        },
        {
          id: 9,
          poster:
            "https://m.media-amazon.com/images/M/MV5BZTEwNDdmNDAtODhhNC00MTYyLWIzYmYtNWFkYjJkZmRlOGEwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
          name: "Raising Dion",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Gia đình", "Phiêu lưu", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],

          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://m.media-amazon.com/images/M/MV5BYWU1ZTNmZDYtNjRkMS00NDBhLTkxNjEtZWUxY2M5YWY3MWI1XkEyXkFqcGdeQXVyMzU4OTg5NzA@._V1_.jpg",
              video: require("./movies/RaisingDion.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://m.media-amazon.com/images/M/MV5BYWU1ZTNmZDYtNjRkMS00NDBhLTkxNjEtZWUxY2M5YWY3MWI1XkEyXkFqcGdeQXVyMzU4OTg5NzA@._V1_.jpg",

              video: require("./movies/RaisingDion.mp4"),
            },
          ],
        },
        {
          id: 10,
          poster:
            "https://i.etsystatic.com/37635282/r/il/0550a0/4164530264/il_fullxfull.4164530264_8o71.jpg",
          name: "Iron Man",
          yearOfRelease: 2019,
          age: "18+",
          nation: "American",
          genres: ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước"],
          numberOfSeasons: "1 Phần    ",
          numberOfEpisodes: "2 Tập",
          description:
            "Iron Man là một siêu anh hùng hư cấu xuất hiện trong truyện tranh của Mỹ được xuất bản bởi Marvel Comics, cũng như các phương tiện truyền thông liên quan. Nhân vật này đã được sáng tác bởi nhà văn - nhà biên tập Stan Lee, được phát triển bởi Larry Lieber, và được thiết kế bởi họa sĩ Don Heck và Jack Kirby",
          cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
          creators: ["Lauren Schmidt Hissrich"],
      
          episodes: [
            {
              id: 1,
              title: "The End's Beginning",
              duration: 1,
              thumbnail:
                "https://images.thedirect.com/media/article_full/iron-man-rdjs.jpg",
              video: require("./movies/IronMan.mp4"),
            },
            {
              id: 2,
              title: "Four Marks",
              duration: 2,
              thumbnail:
                "https://images.thedirect.com/media/article_full/iron-man-rdjs.jpg",
              video: require("./movies/IronMan.mp4"),
            },
          ],
        },
    ]},
    {
      id: 'category6',
          title: 'Coming Soon',
          movies : [
            {
              id: 1,
              poster:
                "https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg",
              name: "Oppenheimer",
              yearOfRelease: 2023,
              age: "18+",
              nation: "American",
              genres: ["Tâm lý","    *     ", "Khoa học"],
              numberOfSeasons: "1 Phần",
              numberOfEpisodes: "1 Tập",
              description:
                "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
              cast: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt","Matt Damon","Alden Ehrenreich"],
              creators: ["Christopher Nolan"],
              coming: "Season 1 Coming December 14",
              episodes: [
                {
                  id: 1,
                  title: "The World Forever Change",
                  duration: 1,
                  thumbnail:
                    "https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg",
                  video: require("./movies/Oppenheimer.mp4"),
                },
              ],
            },
          {
              id: 2,
              poster:
                "https://nld.mediacdn.vn/291774122806476800/2022/12/3/nbnteaser-posterfb-16700462958321286640788.jpg",
              name: "Nhà bà Nữ",
              yearOfRelease: 2023,
              age: "18+",
              nation: "Việt Nam",
              genres: ["Tâm lý", "    *     ",   "Hài hước","    *     ", "Gia đình"],
              numberOfSeasons: "1 Phần",
              numberOfEpisodes: "1 Tập",
              description:
                "Nội dung phim xoay quanh câu chuyện gia đình nhà bà Nữ - một gia đình bán bánh canh cua. Mâu thuẫn giữa bà Nữ với Nhi (con gái bà Nữ) là yếu tố tạo nên sự kịch tính cho phim. Mâu thuẫn này được giải quyết qua hàng loạt sự kiện, biến cố, và để lại nhiều bài học quý giá về tình cảm gia đình.",
              cast: ["Uyển Ân", "Trấn Thành", "Lê Giang","Khả Như","Ngọc Giàu","Song Luân","Lê Dương Bảo Lâm","Việt Anh"],
              creators: ["Trấn Thành"],
              coming: "Season 1 Coming December 14",
              episodes: [
                {
                  id: 1,
                  title: "Nhà bà Nữ",
                  duration: 1,
                  thumbnail:
                    "https://touchcinema.com/storage/slider-app/1440wx600h-5-1674325061.jpg",
                  video: require("./movies/NhaBaNu.mp4"),
                },
              ],
            },
            {
              id: 3,
              poster:
                "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989",
              name: "Avatar",
              yearOfRelease: 2023,
              age: "18+",
              nation: "American",
              genres: ["Khoa học viễn tưởng", "    *     ",   "Hành động","    *     ", "Phiêu lưu"],
              numberOfSeasons: "1 Phần",
              numberOfEpisodes: "1 Tập",
              description:
                "Avatar: Dòng chảy của nước hay còn gọi là Avatar 2, tức phần 2 của Avatar (2009)- một trong những bộ phim hay nhất mọi thời đại. Trong phim, gia đình Na’vi đứng trước mối đe dọa mới từ con người. Họ khám phá ra hành tinh Pandora và gặp hàng loạt thử thách mới. Bộ phim này tiếp tục khiến khán giả trầm trồ với chất lượng hình ảnh và sự đầu tư trong việc xây dựng thế giới giả tưởng như thật.",
              cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver","Stephen Lang","Kate Winslet","Cliff Curtis"],
              creators: ["James Cameron"],
              coming: "Season 1 Coming December 14",
              episodes: [
                {
                  id: 1,
                  title: "Avatar: The Way of Water",
                  duration: 1,
                  thumbnail:
                    "https://4.bp.blogspot.com/-rw8a0tgQDuE/Vrvgeuq97EI/AAAAAAAAAIc/yN3mlj17T70/s1600/avatar-poster-wallpaper-3.jpg",
                  video: require("./movies/Avatar 3.mp4"),
                },
              ],
            },
            {
              id: 4,
              poster:
                "https://image.tmdb.org/t/p/original/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
              name: "Shazam",
              yearOfRelease: 2023,
              age: "18+",
              nation: "American",
              genres: ["Hành động", "    *     ",   "Hài hước","    *     ", "Phiêu lưu"],
              numberOfSeasons: "1 Phần",
              numberOfEpisodes: "1 Tập",
              description:
                "Nội dung phim tiếp tục xoay quanh nhân vật Shazam - phiên bản trưởng thành của cậu bé Billy Batson. Nhưng lần này, anh ta có chuyến phiêu lưu và cuộc chiến mới. Trong phim, bạn còn gặp gỡ nhiều anh hùng và vị thần khác.",
              cast: ["Zachary Levi", "Mark Strong", "Asher Angel","Jack Dylan Grazer","Adam Brody","Djimon Hounsou"],
              creators: ["David F. Sandberg"],
              coming: "Season 1 Coming December 14",
              episodes: [
                {
                  id: 1,
                  title: "Shazam! Fury of the Gods",
                  duration: 1,
                  thumbnail:
                    "https://i.pinimg.com/originals/66/5f/bc/665fbc07ced0c4403ce5809e08dc6095.jpg",
                  video: require("./movies/SHAZAM.mp4"),
                },
              ],
            },
    ]},
    
  ],
};
