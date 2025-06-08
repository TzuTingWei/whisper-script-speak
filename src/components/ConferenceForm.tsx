import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ConferenceForm = () => {
  const [selectedConference, setSelectedConference] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [lookingFor, setLookingFor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      conference: selectedConference,
      aboutYou,
      lookingFor,
    });
  };

  const conferences = [
    'Compmotif Hackathon (London)',
    'ICML 2024',
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Conference Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="conference">Which conference are you going to?</Label>
            <Select value={selectedConference} onValueChange={setSelectedConference}>
              <SelectTrigger>
                <SelectValue placeholder="Select a conference" />
              </SelectTrigger>
              <SelectContent>
                {conferences.map((conference) => (
                  <SelectItem key={conference} value={conference}>
                    {conference}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="about-you">Tell us about you in a few sentences</Label>
            <Textarea
              id="about-you"
              placeholder="Share a bit about yourself, your background, interests, etc."
              value={aboutYou}
              onChange={(e) => setAboutYou(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="looking-for">What are you looking for at the conference?</Label>
            <Textarea
              id="looking-for"
              placeholder="What do you hope to gain, learn, or achieve at this conference?"
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Information
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConferenceForm;
