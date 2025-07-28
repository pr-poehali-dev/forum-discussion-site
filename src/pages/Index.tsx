import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("главная");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const forumTopics = [
    {
      id: 1,
      title: "Обсуждение новых функций",
      author: "Алексей М.",
      rating: 42,
      replies: 15,
      lastActivity: "2 часа назад",
      authorRating: 1250
    },
    {
      id: 2,
      title: "Вопросы по интерфейсу",
      author: "Мария К.",
      rating: 28,
      replies: 8,
      lastActivity: "5 часов назад",
      authorRating: 890
    },
    {
      id: 3,
      title: "Предложения по улучшению",
      author: "Дмитрий П.",
      rating: 35,
      replies: 12,
      lastActivity: "1 день назад",
      authorRating: 1560
    }
  ];

  const chatMessages = [
    {
      id: 1,
      author: "Алексей М.",
      rating: 1250,
      message: "Думаю, нужно добавить возможность сортировки тем по популярности",
      time: "14:30",
      likes: 5
    },
    {
      id: 2,
      author: "Мария К.",
      rating: 890,
      message: "Согласна! И ещё было бы здорово добавить теги для категоризации",
      time: "14:32",
      likes: 3
    },
    {
      id: 3,
      author: "Дмитрий П.",
      rating: 1560,
      message: "Отличные идеи. Можно также рассмотреть систему уведомлений",
      time: "14:35",
      likes: 7
    }
  ];

  const renderMainPage = () => (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-black">ФОРУМ</h1>
        <p className="text-gray-600">Обсуждение тем и идей</p>
      </div>

      <div className="grid gap-4">
        {forumTopics.map(topic => (
          <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer border border-gray-200" onClick={() => setSelectedTopic(topic)}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-black">{topic.title}</h3>
                <Badge variant="secondary" className="bg-gray-100 text-black border border-gray-300">
                  {topic.rating}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs bg-gray-200 text-black">
                        {topic.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-black">{topic.author}</span>
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {topic.authorRating}
                    </Badge>
                  </div>
                  
                  <span className="text-gray-500">{topic.replies} ответов</span>
                </div>
                
                <span className="text-gray-500">{topic.lastActivity}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="space-y-4">
      <div className="border-b border-gray-200 pb-4">
        <Button 
          variant="ghost" 
          onClick={() => setSelectedTopic(null)}
          className="mb-4 text-black hover:bg-gray-100"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к темам
        </Button>
        
        <h2 className="text-2xl font-bold text-black">{selectedTopic?.title}</h2>
        <div className="flex items-center space-x-2 mt-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-gray-200 text-black">
              {selectedTopic?.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-black font-medium">{selectedTopic?.author}</span>
          <Badge variant="outline" className="border-gray-300 text-gray-600">
            {selectedTopic?.authorRating}
          </Badge>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {chatMessages.map(msg => (
          <Card key={msg.id} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gray-200 text-black text-sm">
                      {msg.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-black">{msg.author}</span>
                  <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                    {msg.rating}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{msg.time}</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 hover:bg-gray-100">
                    <Icon name="Heart" size={12} className="mr-1" />
                    {msg.likes}
                  </Button>
                </div>
              </div>
              <p className="text-gray-700">{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gray-200 text-black">В</AvatarFallback>
            </Avatar>
            <Input 
              placeholder="Написать сообщение..." 
              className="flex-1 border-gray-300 focus:border-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800">
              <Icon name="Send" size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex space-x-8">
              <Button
                variant={activeTab === "главная" ? "default" : "ghost"}
                onClick={() => {
                  setActiveTab("главная");
                  setSelectedTopic(null);
                }}
                className={activeTab === "главная" ? "bg-black text-white" : "text-black hover:bg-gray-100"}
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              
              <Button
                variant={activeTab === "форумы" ? "default" : "ghost"}
                onClick={() => {
                  setActiveTab("форумы");
                  setSelectedTopic(null);
                }}
                className={activeTab === "форумы" ? "bg-black text-white" : "text-black hover:bg-gray-100"}
              >
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Форумы
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Поиск..." 
                  className="pl-10 w-64 border-gray-300 focus:border-black"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {selectedTopic ? renderChat() : renderMainPage()}
      </main>
    </div>
  );
};

export default Index;